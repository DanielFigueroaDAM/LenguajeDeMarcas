drop trigger if exists tmaxpostos on postos; 
create or replace function ft_maxpostos() returns trigger language plpgsql as $$
declare 
	cuenta integer;
	


begin
	select count(*) into cuenta from postos where cod_xestor=new.cod_xestor;
	if (cuenta>=7) then
		raise exception 'Non vai';
	else
		raise notice 'Si vai';
	end if;


return new;
end; $$;

create trigger tmaxpostos before insert on postos for each row execute procedure ft_maxpostos();

