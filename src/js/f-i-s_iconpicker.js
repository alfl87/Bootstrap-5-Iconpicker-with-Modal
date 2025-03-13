class DropdownSearch {
    constructor(inputSelector, jsonUrl) {
        this.input = document.querySelector(inputSelector);
        this.jsonUrl = jsonUrl;
        this.options = [];
        this.createModal();
        this.fetchData();
        this.bindEvents();
        this.setInitialIcon();
        window.addEventListener("resize", () => this.updateGridColumns());
    }

    async fetchData() {
        try {
            const response = await fetch(this.jsonUrl);
            this.options = await response.json();
            this.populateDropdown();
        } catch (error) {
            console.error("Fehler beim Laden der JSON-Daten:", error);
        }
    }

    createModal() {
        this.wrapper = document.createElement("div");
        this.wrapper.classList.add("input-group", "mb-3");

        this.iconDisplay = document.createElement("span");
        this.iconDisplay.classList.add("input-group-text");
        
        this.input.classList.add("form-control");
        
        this.input.parentNode.insertBefore(this.wrapper, this.input);
        this.wrapper.appendChild(this.iconDisplay);
        this.wrapper.appendChild(this.input);

        this.modal = document.createElement("div");
        this.modal.classList.add("modal", "fade");
        this.modal.setAttribute("tabindex", "-1");
        this.modal.innerHTML = `
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Icon auswählen</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body" style="display: flex; flex-direction: column; overflow: hidden;">
                        <input type="text" class="form-control dropdown-search mb-3" placeholder="Suche..." style="position: sticky; top: 0; z-index: 1000; background: white;">
                        <div class="dropdown-grid" style="display: grid; gap: 10px; overflow-y: auto; max-height: 300px; width: 100%;"></div>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(this.modal);
        this.modalInstance = new bootstrap.Modal(this.modal);
        this.searchInput = this.modal.querySelector(".dropdown-search");
        this.grid = this.modal.querySelector(".dropdown-grid");
        this.updateGridColumns();
    }

    populateDropdown() {
        this.grid.innerHTML = this.options.map(option => `
            <div class="dropdown-item text-center p-2" data-value="${option}" 
                style="background: white; border: 1px solid #ccc; cursor: pointer; transition: background 0.3s; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 60px; min-width: 60px;">
                <i class="${option}" style="font-size: 1.5rem;"></i>
                <div style="font-size: 0.8rem;">${option}</div>
            </div>`
        ).join("");
        this.bindListEvents();
        this.updateGridColumns();
    }

    updateGridColumns() {
        setTimeout(() => {
            const modalBody = this.modal.querySelector(".modal-body");
            const modalWidth = modalBody.clientWidth;
            let columns = 1;
            if (modalWidth > 400) columns = 2;
            if (modalWidth > 600) columns = 3;
            this.grid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
            this.grid.style.overflowX = "hidden";
        }, 50);
    }

    bindEvents() {
        this.input.addEventListener("focus", () => this.showModal());
        this.searchInput.addEventListener("input", () => this.filterOptions());
    }

    bindListEvents() {
        this.grid.querySelectorAll(".dropdown-item").forEach(item => {
            item.addEventListener("click", (e) => this.selectOption(e));
            item.addEventListener("mouseover", () => item.style.background = "#f8f9fa");
            item.addEventListener("mouseout", () => item.style.background = "white");
        });
    }

    filterOptions() {
        const searchText = this.searchInput.value.toLowerCase();
        this.grid.querySelectorAll(".dropdown-item").forEach(item => {
            item.style.display = item.textContent.toLowerCase().includes(searchText) ? "flex" : "none";
        });
    }

    showModal() {
        setTimeout(() => this.updateGridColumns(), 100);
        this.modalInstance.show();
        this.searchInput.value = "";
        this.searchInput.focus();
        this.filterOptions();
    }

    selectOption(event) {
        const selectedValue = event.target.closest(".dropdown-item").getAttribute("data-value");
        this.input.value = selectedValue;
        this.iconDisplay.innerHTML = `<i class="${selectedValue}"></i>`;
        this.modalInstance.hide();
    }

    setInitialIcon() {
        if (this.input.value.trim() !== "") {
            this.iconDisplay.innerHTML = `<i class="${this.input.value}"></i>`;
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new DropdownSearch("#f-i-s_iconpicker", "src/css/bootstrap5icons.json");
});
