drop trigger if exists tcapacidade on voos;
 create or replace function ft_capacidade() returns trigger language plpgsql as $$
declare
	cuenta integer;
	cpac integer;

begin
	select count(*) into cuenta from voos where codigoao=new.codigoao;
	
	if (select count(*) from nacional where codigoa=new.codigoao) > 0 then
		select capacidade into cpac from nacional where codigoa=new.codigoao;
		if(cuenta>=cpac) then
			raise exception 'rexeitada';
		else
			raise notice 'aceptada, aun no superó el limite';
		end if;
	else 
		raise notice 'No es nacional';
	end if; 

	
return new;
end; $$;

create trigger tcapacidade before insert on voos for each row execute procedure ft_capacidade();

