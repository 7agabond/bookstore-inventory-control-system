package com.jonas.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class VendaDTO {

    private Long id;

    private String clienteNome;

    private LivroDTO livro;

    private Integer qtdItens;

    private Double precoVenda;
    
    private Double total;
        
}
