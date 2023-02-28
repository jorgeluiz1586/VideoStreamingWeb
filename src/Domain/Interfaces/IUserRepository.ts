import { UserEntity } from "../Entities/UserEntity";

export interface IUSerRepository {
    getAllUsers(): Array<UserEntity>;

    createUser(user: UserEntity): UserEntity;

    updateUser(user: UserEntity): UserEntity;

    deleteUser(user: UserEntity): void;
}