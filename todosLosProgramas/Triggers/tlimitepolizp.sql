DROP TRIGGER IF EXISTS tlimitepolizp ON asegurado;
CREATE or REPLACE FUNCTION ft_limitepolizp()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
DECLARE

	cuenta integer=0;

BEGIN
select count(*) into cuenta from asegurado where codp=new.codp;
if(cuenta>=2) then
	raise exception 'no es valido';
else
	raise notice 'si es valido';
end if;
RETURN NEW;
END;
$$;

CREATE TRIGGER tlimitepolizp
BEFORE insert
ON asegurado
FOR EACH ROW
EXECUTE FUNCTION ft_limitepolizp();
	
