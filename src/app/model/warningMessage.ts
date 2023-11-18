export class WarningMessage {

    showWarning:boolean;
    saveOrUpdate: boolean
    itemName: string
    message?:string;
    subMessage?:string;
    warningIcon?:string;

    constructor(saveOrUpdate: boolean, itemName: string, showWarning: boolean) {
        this.saveOrUpdate = saveOrUpdate;
        this.itemName = itemName;
        this.showWarning = showWarning;

        if(saveOrUpdate) {
            this.message = `Expense Saved/Updated !`;
            this.subMessage = `The item ${itemName} has been saved/updated`;
            this.warningIcon = "check_circle";
        } else {
            this.message = `Expense Deleted !`;
            this.subMessage = `The item ${itemName} has been deleted`;
            this.warningIcon = "report";
        }
    }
}