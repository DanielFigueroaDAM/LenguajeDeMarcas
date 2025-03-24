DROP TRIGGER IF EXISTS tactxog ON xogador;
CREATE or REPLACE FUNCTION ft_actxog()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
DECLARE
antiguoSalario integer;
BEGIN
select salario into antiguoSalario from xogador where codx=new.codx;

if(new.salario>antiguoSalario*2) then
	raise exception 'no es valido';
else
	raise notice 'si es valido';

RETURN NEW;
END;
$$;

CREATE TRIGGER tactxog
BEFORE UPDATE
ON xogador
FOR EACH ROW
EXECUTE FUNCTION ft_actxog();
	
