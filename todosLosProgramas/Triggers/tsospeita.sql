drop trigger if exists tsospeita on entrevista;
 create or replace function ft_sospeita() returns trigger language plpgsql as $$
declare
	
	
	codigoXestor varchar;
	apellidosXestor record;
	apellidosPersoa record;
	
begin
	select cod_xestor into codigoXestor from postos where cod_posto=new.cod_posto;
	select ap1_xestor,ap2_xestor into apellidosXestor from xestores where cod_xestor=codigoXestor;
	select ap1_persoa,ap2_persoa into apellidosPersoa from persoas where num_persoa=new.num_persoa;
	if apellidosXestor=apellidosPersoa then
		raise exception 'tienen apellidos iguales';
	else
		raise notice 'es valido, tienen apellidos diferentes';
	end if;
return new;
end; $$;

create trigger tsospeita before insert on entrevista for each row execute procedure ft_sospeita();

