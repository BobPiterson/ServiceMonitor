import {Column, Model, Table, Unique} from "sequelize-typescript";

@Table
export class UsersModel extends Model {
    @Unique
    @Column
    login!: string

    @Unique
    @Column
    email!: string

    @Column
    password!: string
}
