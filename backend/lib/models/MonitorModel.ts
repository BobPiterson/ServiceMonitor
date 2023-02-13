import {Column, Model, Table} from "sequelize-typescript";

@Table({timestamps: false})
export class MonitorModel extends Model {
    @Column
    url!: string

    @Column
    inf_s!: boolean

    @Column
    note!: number
}
