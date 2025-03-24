/*
trepartepedido
impedir que un repartidor cargue pedidos que sean de clientes de zonas distintas as que el esta asignado

insert into carga values ('p13','z1',1,2,'12/7/11',18);
 este pedido non  corresponde repartilo a este repartidor

insert into carga values ('p13','z2',1,2,'12/7/11',18);
 pedido cargado

*/
DROP TRIGGER IF EXISTS trepartepedido ON carga;
CREATE or REPLACE FUNCTION ft_repartepedido()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
DECLARE

	zonaCliente varchar;
	zonaRepartidor varchar;
	clienteN varchar;

BEGIN 
	select codz into zonaRepartidor from repartidor where codz=new.codz and n=new.n;
	select nif into clienteN from pedido where codp=new.codp;
	select codz into zonaCliente from cliente where nif=clienteN;
	if zonaCliente=zonaRepartidor then
		raise notice 'si es valido';
	else
		raise exception 'no es valido';
	end if;
	
RETURN NEW;
END;
$$;

CREATE TRIGGER trepartepedido
AFTER INSERT
ON carga
FOR EACH ROW
EXECUTE FUNCTION ft_repartepedido();

