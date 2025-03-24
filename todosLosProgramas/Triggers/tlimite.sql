drop trigger if exists tlimite on entrevista; 
create or replace function ft_limite() returns trigger language plpgsql as $$
declare 
	
	codxestor varchar;
	postoentre varchar;
	cuenta integer=0;
	fila1 record;
	fila2 record;

begin
	select cod_xestor into codxestor from postos where cod_posto=new.cod_posto;
	for fila1 in select * from postos where cod_xestor=codxestor loop
		for fila2 in select * from postos where cod_posto in (select cod_posto from entrevista where fila1.cod_posto=cod_posto and num_persoa=new.num_persoa) loop
			cuenta=cuenta+1;
		end loop;
	end loop;
	
	if cuenta>=2 then
		raise exception 'non vai';
	else
		raise notice 'si vai';
	end if;
	

return new;
end; $$;

create trigger tlimite before insert on entrevista for each row execute procedure ft_limite();

