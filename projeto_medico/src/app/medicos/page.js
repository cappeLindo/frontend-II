"use client";
import React, { useState, useEffect } from "react";
import styles from "./medico.module.css";

const urlPadrao = "https://api-clinica-2a.onrender.com/medicos";

export default function Medicos() {
    const [medicos, setMedicos] = useState([]);
    const [pesquisa, setPesquisa] = useState("");

    async function apresetarTodosMedicos() {
        try {
            const response = await fetch(urlPadrao);
            if (!response.ok) {
                throw new Error("Erro ao buscar dados:" + response.statusText);
            }
            const data = await response.json();
            setMedicos(data);
        } catch (error) {
            console.log("Ocorreu algum erro:" + error);
        }
    }

    useEffect(() => {
        apresetarTodosMedicos();
    }, []);

    const medicoFiltrados = medicos.filter((medico) =>
        medico.nome.toLowerCase().includes(pesquisa.toLowerCase())
    );

    return (
        <div className={styles.container}>
            <div className={styles.background}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Lista de Médicos</h1>
                </div>

                <div className={styles.searchBox}>
                    <input
                        type="text"
                        placeholder="Pesquisar médico por nome..."
                        value={pesquisa}
                        onChange={(e) => setPesquisa(e.target.value)}
                    />
                </div>

                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Telefone</th>
                                <th>Email</th>
                                <th>Especialidade</th>
                            </tr>
                        </thead>
                        <tbody>
                            {medicoFiltrados.map((medico) => (
                                <tr key={medico.id}>
                                    <td>{medico.id}</td>
                                    <td>{medico.nome}</td>
                                    <td>{medico.telefone}</td>
                                    <td>{medico.email}</td>
                                    <td>{medico.especialidade}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}