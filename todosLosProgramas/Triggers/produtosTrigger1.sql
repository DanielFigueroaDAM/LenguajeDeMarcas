CREATE OR REPLACE FUNCTION verificar_stock()
RETURNS TRIGGER AS $$
DECLARE
nomen varchar;
BEGIN
    select nome into nomen from produto where nome=new.nome;
    IF new.nome=nomen THEN
        RAISE EXCEPTION 'No se pudo igresar';
    ELSE
        RAISE NOTICE 'Si se pudo ingresar';
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER tproduto1
BEFORE INSERT ON produto
FOR EACH ROW
EXECUTE FUNCTION verificar_stock();

