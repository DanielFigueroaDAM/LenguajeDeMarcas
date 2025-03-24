drop trigger if exists tescalas on escalas; 
create or replace function ft_escalas() returns trigger language plpgsql as $$
declare 
	
	cuenta integer;

begin
	select count(*) into cuenta from escalas where codigov=new.codigov;
	if(cuenta=>3) then 
		raise exception 'non vai';
	else
		raise notice 'si vai';
	end if;
	

return new;
end; $$;

create trigger tescalas before insert on escalas for each row execute procedure ft_escalas();

