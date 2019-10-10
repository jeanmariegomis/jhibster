package com.devweb.haliss.repository;
import com.devweb.haliss.domain.Transaction;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Spring Data  repository for the Transaction entity.
 */
@SuppressWarnings("unused")
@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Long> {

    @Query("select transaction from Transaction transaction where transaction.userEnvoi.login = ?#{principal.username}")
    List<Transaction> findByUserEnvoiIsCurrentUser();

    @Query("select transaction from Transaction transaction where transaction.userRetrait.login = ?#{principal.username}")
    List<Transaction> findByUserRetraitIsCurrentUser();

}
