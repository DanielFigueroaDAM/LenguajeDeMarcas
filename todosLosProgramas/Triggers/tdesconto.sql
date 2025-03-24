/*
tdesconto
trigger que actualiza o total dun pedido cando se engade un novo producto na composicion de dito pedido.
ter en conta que debe aplicarse un desconto do 10% ao total do pedido cando o total de dito pedido tendo en conta o novo producto  iguale ou supere os 90 euros :
nota1: observese que  que cando se engade un produto na composicion dun pedido o total deberia actualizarse no prezo de dito pedido  multiplicado  pola cantidade de unidades do mesmo (prezo * cantidade)
nota2: se alguen usa a coma decimal ter en cota que debe usarse '.' en lugar de coma, por exemplo para calcular o 10% de 90 podemos fariamos 90*0.10


insert into compon values ('p10','m1',1,5);  
desconto aplicado (o pedido p10 pasa a ter  por total o valor 82 cando deberia ser de 91)

facer rollback para deixar o pedido p10 en condicions iniciais antes de facer o insert que sigue

insert into compon values ('p10','m1',1,4);  
non se aplica desconto ( o pedido p10 pasa a ter por total o valor 89)
*/
DROP TRIGGER IF EXISTS tdesconto ON compon;

CREATE OR REPLACE FUNCTION ft_desconto() RETURNS TRIGGER LANGUAGE plpgsql AS $$
DECLARE
    precioProdutos INTEGER;
    nuevoTotal INTEGER;
    totalDesconto INTEGER;
    viejoPrecio INTEGER;
    nuevoPrecio INTEGER;
BEGIN
    SELECT prezo INTO nuevoPrecio
    FROM produto
    WHERE codm = NEW.codm AND n = NEW.n;
    
    precioProdutos = nuevoPrecio * NEW.cantidade;
    
    SELECT total INTO viejoPrecio
    FROM pedido
    WHERE codp = NEW.codp;
    
    nuevoTotal = viejoPrecio + precioProdutos;
    
    IF nuevoTotal >= 90 THEN
        nuevoTotal = nuevoTotal * 0.9;
    END IF;
    
    UPDATE pedido
    SET total = nuevoTotal
    WHERE codp = NEW.codp;
    
    RETURN NEW;
END;
$$;

CREATE TRIGGER tdesconto
BEFORE INSERT ON compon
FOR EACH ROW EXECUTE FUNCTION ft_desconto();

-- Actualización del registro existente
UPDATE compon
SET cantidade = 4
WHERE codp = 'p10' AND codm = 'm1' AND n = 1;

