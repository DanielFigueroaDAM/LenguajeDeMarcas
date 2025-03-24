drop trigger if exists trexeita on entrevista; 
create or replace function ft_rexeita() returns trigger language plpgsql as $$
declare 
	cuenta integer;
	cuenta2 integer=0;
	fila record;
	fila2 record;

begin
	select count(*) rexeita into cuenta from rexeita where num_persoa=new.num_persoa;

	
	if(cuenta>0) then 
		for fila in select * from rexeita where num_persoa=new.num_persoa loop
			for fila2 in select * from postos where fila.cod_empresa=cod_empresa and cod_posto=new.cod_posto loop
				cuenta2=cuenta2+1;
			end loop;
		end loop;
		if(cuenta2>0)then
			raise exception 'no aceptado';
		else
			raise notice 'si vai';
		end if;
	else
		raise notice 'aceptado';
	end if;



return new;
end; $$;

create trigger trexeita before insert on entrevista for each row execute procedure ft_rexeita();

