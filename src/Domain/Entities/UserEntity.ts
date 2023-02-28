import { AbstractEntity } from "./AbstractEntity";

export class UserEntity extends AbstractEntity {
    private name?: string;
    private email?: string;
    private password?: string;
    
    UserEntity(id: number, name: string, email: string, password: string) {
        this.setName(name);
        this.setEmail(email);
        this.setPassword(password);
    }

    public getName() {
        const name = this.name;
        return name;
    }

    public getEmail() {
        const email = this.email;
        return email;
    }

    public getPassword() {
        const password = this.password;
        return password;
    }

    public setName(name: string) {
        this.name = name;
    }

    public setEmail(email: string) {
        this.email = email;
    }

    public setPassword(password: string) {
        this.password = password;
    }
}
