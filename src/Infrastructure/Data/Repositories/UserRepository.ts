import { UserEntity } from "../../../Domain/Entities/UserEntity";
import { IUSerRepository } from "../../../Domain/Interfaces/IUserRepository";

export class UserRepository implements IUSerRepository {
    getAllUsers(): UserEntity[] {
        throw new Error("Method not implemented.");
    }
    createUser(user: UserEntity): UserEntity {
        throw new Error("Method not implemented.");
    }
    updateUser(user: UserEntity): UserEntity {
        throw new Error("Method not implemented.");
    }
    deleteUser(user: UserEntity): void {
        throw new Error("Method not implemented.");
    }
    
}