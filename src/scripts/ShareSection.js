let rootSelector = ".avatar";

class ShareSection {
  selectors = {
    root: rootSelector,
    button: ".avatar__share-button",
    shareSection: ".share-section",
  };

  stateClasses = {
    isActive: "is-active",
    appearingAnimation: "appearing-animation",
  };

  constructor(element) {
    this.rootElement = element;
    this.buttonElement = this.rootElement.querySelector(this.selectors.button);
    this.shareSectionElement = this.rootElement.querySelector(
      this.selectors.shareSection
    );

    this.bindEvents();
  }

  bindEvents() {
    this.buttonElement.addEventListener("click", () => {
      this.rootElement.classList.toggle(this.stateClasses.isActive);
      this.buttonElement.classList.toggle(this.stateClasses.isActive);
      this.shareSectionElement.classList.toggle(this.stateClasses.isActive);

      setTimeout(() => {
        this.shareSectionElement.classList.toggle(
          this.stateClasses.appearingAnimation
        );
      }, 1);
    });
  }
}

class ShareSectionCollection {
  constructor() {
    this.init();
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new ShareSection(element);
    });
  }
}

export default ShareSectionCollection;
