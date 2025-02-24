"use client";
import React, { useState, useEffect } from "react";
import styles from "./paciente.module.css"; 

const urlPadrao = "https://api-clinica-2a.onrender.com/pacientes";

export default function Pacientes() {
    const [pacientes, setPacientes] = useState([]);
    const [pesquisa, setPesquisa] = useState("");

    async function carregarPacientes() {
        try {
            const response = await fetch(urlPadrao);
            if (!response.ok) {
                throw new Error("Erro ao buscar dados: " + response.statusText);
            }
            const data = await response.json();
            setPacientes(data);
        } catch (error) {
            console.log("Ocorreu um erro: " + error);
        }
    }

    useEffect(() => {
        carregarPacientes();
    }, []);

    const pacientesFiltrados = pacientes.filter((paciente) =>
        paciente.nome.toLowerCase().includes(pesquisa.toLowerCase())
    );

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Lista de Pacientes</h1>
                </div>

                {/* Campo de pesquisa */}
                <div className={styles.searchBox}>
                    <input
                        type="text"
                        placeholder="Pesquisar paciente por nome..."
                        value={pesquisa}
                        onChange={(e) => setPesquisa(e.target.value)}
                        className={styles.inputField}
                    />
                </div>

                <div className={styles.tableContainer}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Telefone</th>
                                <th>Email</th>
                                <th>CPF</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pacientesFiltrados.map((paciente) => (
                                <tr key={paciente.id}>
                                    <td>{paciente.id}</td>
                                    <td>{paciente.nome}</td>
                                    <td>{paciente.telefone}</td>
                                    <td>{paciente.email}</td>
                                    <td>{paciente.cpf}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
