
drop trigger if exists th1p on hosp1; 
create or replace function ft_h1p() returns trigger language plpgsql as $$
declare 

	cuenta integer=0;
	aream varchar;
	areah varchar;

begin
	select coda into aream from adscrito where codm=new.codm;
	select coda into areah from concertado where codh=new.codh;
	if(areah!=aream) then
		raise exception 'non vai';
	else
		raise notice 'si vai';
	end if;
	

return new;
end; $$;

create trigger th1p before insert on hosp1 for each row execute procedure ft_h1p();
