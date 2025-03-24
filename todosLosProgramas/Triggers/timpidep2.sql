drop trigger if exists timpidep2 on a1c;
 create or replace function ft_impidep2() returns trigger language plpgsql as $$
declare
	
	
	cuenta numeric;
	
begin
	select count(*) into cuenta from a2c where codp=new.codp and numas=new.numas;
	-- new.codp=p15 new.numas=1 count=1 cuenta=1
	
	--new.cop=p15 y new.numas=2 count=0 cuenta=0
	
	
	if(cuenta=1) then
		raise exception 'el asegurado ya está 2ª categoria';
	else
		raise notice 'realizada insercion';
	end if;
	

return new;
end; $$;

create trigger timpidep2 before insert on a1c for each row execute procedure ft_impidep2();
--1) trigger timpidep
--trigger que impida que un asegurado de 2ª categoria poda rexistrarse tamen como asegurado de 1ª categoría
 
-- insert into a1c values('p15',1);
--   o asegurado xa o e de 2ª categoria
-- insert into a1c values('p15',2);
--   realizada insercion de asegurado de 1ª categoria
