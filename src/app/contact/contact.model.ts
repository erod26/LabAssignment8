
interface IContact {
    id?: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    editing?: boolean;
}

export class Contact {

    public id?: number;
    public firstName?: string;
    public lastName?: string;
    public email?: string;
    public phone?: string;
    public editing?: boolean;

    constructor(contact: IContact) {
        contact.editing = this.setState(contact);
        Object.assign(this, contact);
    }

    setState(Contact: IContact) {

        if (Contact == null || Object.keys(Contact).length == 0) {
            return true;
        }
        let editing = false;
        Object.keys(Contact).forEach((key) => {
            console.log('from setState...', Contact[key]);
            if (Contact[key] == null) {
                editing = true;
            }
        });
        return editing;
    }
}