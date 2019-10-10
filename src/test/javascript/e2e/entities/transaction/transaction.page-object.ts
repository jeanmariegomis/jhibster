import { element, by, ElementFinder } from 'protractor';

export class TransactionComponentsPage {
  createButton = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('jhi-transaction div table .btn-danger'));
  title = element.all(by.css('jhi-transaction div h2#page-heading span')).first();

  async clickOnCreateButton(timeout?: number) {
    await this.createButton.click();
  }

  async clickOnLastDeleteButton(timeout?: number) {
    await this.deleteButtons.last().click();
  }

  async countDeleteButtons() {
    return this.deleteButtons.count();
  }

  async getTitle() {
    return this.title.getText();
  }
}

export class TransactionUpdatePage {
  pageTitle = element(by.id('jhi-transaction-heading'));
  saveButton = element(by.id('save-entity'));
  cancelButton = element(by.id('cancel-save'));
  dateInput = element(by.id('field_date'));
  fraisInput = element(by.id('field_frais'));
  comEnvoiInput = element(by.id('field_comEnvoi'));
  comRetraitInput = element(by.id('field_comRetrait'));
  comSystemeInput = element(by.id('field_comSysteme'));
  comEtatInput = element(by.id('field_comEtat'));
  clientEnvoiSelect = element(by.id('field_clientEnvoi'));
  clientretraitSelect = element(by.id('field_clientretrait'));
  userEnvoiSelect = element(by.id('field_userEnvoi'));
  userRetraitSelect = element(by.id('field_userRetrait'));

  async getPageTitle() {
    return this.pageTitle.getText();
  }

  async setDateInput(date) {
    await this.dateInput.sendKeys(date);
  }

  async getDateInput() {
    return await this.dateInput.getAttribute('value');
  }

  async setFraisInput(frais) {
    await this.fraisInput.sendKeys(frais);
  }

  async getFraisInput() {
    return await this.fraisInput.getAttribute('value');
  }

  async setComEnvoiInput(comEnvoi) {
    await this.comEnvoiInput.sendKeys(comEnvoi);
  }

  async getComEnvoiInput() {
    return await this.comEnvoiInput.getAttribute('value');
  }

  async setComRetraitInput(comRetrait) {
    await this.comRetraitInput.sendKeys(comRetrait);
  }

  async getComRetraitInput() {
    return await this.comRetraitInput.getAttribute('value');
  }

  async setComSystemeInput(comSysteme) {
    await this.comSystemeInput.sendKeys(comSysteme);
  }

  async getComSystemeInput() {
    return await this.comSystemeInput.getAttribute('value');
  }

  async setComEtatInput(comEtat) {
    await this.comEtatInput.sendKeys(comEtat);
  }

  async getComEtatInput() {
    return await this.comEtatInput.getAttribute('value');
  }

  async clientEnvoiSelectLastOption(timeout?: number) {
    await this.clientEnvoiSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async clientEnvoiSelectOption(option) {
    await this.clientEnvoiSelect.sendKeys(option);
  }

  getClientEnvoiSelect(): ElementFinder {
    return this.clientEnvoiSelect;
  }

  async getClientEnvoiSelectedOption() {
    return await this.clientEnvoiSelect.element(by.css('option:checked')).getText();
  }

  async clientretraitSelectLastOption(timeout?: number) {
    await this.clientretraitSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async clientretraitSelectOption(option) {
    await this.clientretraitSelect.sendKeys(option);
  }

  getClientretraitSelect(): ElementFinder {
    return this.clientretraitSelect;
  }

  async getClientretraitSelectedOption() {
    return await this.clientretraitSelect.element(by.css('option:checked')).getText();
  }

  async userEnvoiSelectLastOption(timeout?: number) {
    await this.userEnvoiSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async userEnvoiSelectOption(option) {
    await this.userEnvoiSelect.sendKeys(option);
  }

  getUserEnvoiSelect(): ElementFinder {
    return this.userEnvoiSelect;
  }

  async getUserEnvoiSelectedOption() {
    return await this.userEnvoiSelect.element(by.css('option:checked')).getText();
  }

  async userRetraitSelectLastOption(timeout?: number) {
    await this.userRetraitSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async userRetraitSelectOption(option) {
    await this.userRetraitSelect.sendKeys(option);
  }

  getUserRetraitSelect(): ElementFinder {
    return this.userRetraitSelect;
  }

  async getUserRetraitSelectedOption() {
    return await this.userRetraitSelect.element(by.css('option:checked')).getText();
  }

  async save(timeout?: number) {
    await this.saveButton.click();
  }

  async cancel(timeout?: number) {
    await this.cancelButton.click();
  }

  getSaveButton(): ElementFinder {
    return this.saveButton;
  }
}

export class TransactionDeleteDialog {
  private dialogTitle = element(by.id('jhi-delete-transaction-heading'));
  private confirmButton = element(by.id('jhi-confirm-delete-transaction'));

  async getDialogTitle() {
    return this.dialogTitle.getText();
  }

  async clickOnConfirmButton(timeout?: number) {
    await this.confirmButton.click();
  }
}
