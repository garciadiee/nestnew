import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('usuarios')
export class UsuariosEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: 'varchar', unique: true, length: 255, nullable: false})
    usuario: string;

    @Column({type: 'varchar', length: 255, nullable: false})
    password: string;
}