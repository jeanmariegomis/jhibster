package com.devweb.haliss.domain;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.time.LocalDate;

/**
 * A Transaction.
 */
@Entity
@Table(name = "transaction")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Transaction implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "date")
    private LocalDate date;

    @Column(name = "frais")
    private String frais;

    @Column(name = "com_envoi")
    private String comEnvoi;

    @Column(name = "com_retrait")
    private String comRetrait;

    @Column(name = "com_systeme")
    private String comSysteme;

    @Column(name = "com_etat")
    private String comEtat;

    @ManyToOne
    @JsonIgnoreProperties("transactions")
    private Client clientEnvoi;

    @ManyToOne
    @JsonIgnoreProperties("transactions")
    private Client clientretrait;

    @ManyToOne
    @JsonIgnoreProperties("transactions")
    private User userEnvoi;

    @ManyToOne
    @JsonIgnoreProperties("transactions")
    private User userRetrait;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getDate() {
        return date;
    }

    public Transaction date(LocalDate date) {
        this.date = date;
        return this;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getFrais() {
        return frais;
    }

    public Transaction frais(String frais) {
        this.frais = frais;
        return this;
    }

    public void setFrais(String frais) {
        this.frais = frais;
    }

    public String getComEnvoi() {
        return comEnvoi;
    }

    public Transaction comEnvoi(String comEnvoi) {
        this.comEnvoi = comEnvoi;
        return this;
    }

    public void setComEnvoi(String comEnvoi) {
        this.comEnvoi = comEnvoi;
    }

    public String getComRetrait() {
        return comRetrait;
    }

    public Transaction comRetrait(String comRetrait) {
        this.comRetrait = comRetrait;
        return this;
    }

    public void setComRetrait(String comRetrait) {
        this.comRetrait = comRetrait;
    }

    public String getComSysteme() {
        return comSysteme;
    }

    public Transaction comSysteme(String comSysteme) {
        this.comSysteme = comSysteme;
        return this;
    }

    public void setComSysteme(String comSysteme) {
        this.comSysteme = comSysteme;
    }

    public String getComEtat() {
        return comEtat;
    }

    public Transaction comEtat(String comEtat) {
        this.comEtat = comEtat;
        return this;
    }

    public void setComEtat(String comEtat) {
        this.comEtat = comEtat;
    }

    public Client getClientEnvoi() {
        return clientEnvoi;
    }

    public Transaction clientEnvoi(Client client) {
        this.clientEnvoi = client;
        return this;
    }

    public void setClientEnvoi(Client client) {
        this.clientEnvoi = client;
    }

    public Client getClientretrait() {
        return clientretrait;
    }

    public Transaction clientretrait(Client client) {
        this.clientretrait = client;
        return this;
    }

    public void setClientretrait(Client client) {
        this.clientretrait = client;
    }

    public User getUserEnvoi() {
        return userEnvoi;
    }

    public Transaction userEnvoi(User user) {
        this.userEnvoi = user;
        return this;
    }

    public void setUserEnvoi(User user) {
        this.userEnvoi = user;
    }

    public User getUserRetrait() {
        return userRetrait;
    }

    public Transaction userRetrait(User user) {
        this.userRetrait = user;
        return this;
    }

    public void setUserRetrait(User user) {
        this.userRetrait = user;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Transaction)) {
            return false;
        }
        return id != null && id.equals(((Transaction) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "Transaction{" +
            "id=" + getId() +
            ", date='" + getDate() + "'" +
            ", frais='" + getFrais() + "'" +
            ", comEnvoi='" + getComEnvoi() + "'" +
            ", comRetrait='" + getComRetrait() + "'" +
            ", comSysteme='" + getComSysteme() + "'" +
            ", comEtat='" + getComEtat() + "'" +
            "}";
    }
}
