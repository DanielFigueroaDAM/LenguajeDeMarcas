/*

tlimitesolp
impedir que una personaxe tipo soldado poda ter por xefe a outro soldado (inserindo)



insert into personaxes values ('p48','zira','soldado','p21');
'este personaxe e un soldado e non debe ter por xefe a outro soldado'

insert into personaxes values ('p48','zira','soldado','p46');
'rexistro inserido'

insert into personaxes values ('p49','nerf','cabo','p21');
'rexistro inserido'
*/
drop trigger if exists tlimitesolp on personaxes;
 create or replace function ft_limitesolp() returns trigger language plpgsql as $$
declare
	gradXefe varchar;
	
begin
	select graduacion into gradXefe from personaxes where codper=new.codper2;
	if(new.graduacion=gradXefe and new.graduacion='soldado') then
		raise exception 'este personaxe e un soldado e non debe ter por xefe a outro soldado';
	else
		raise notice 'si vai';
	end if;

return new;
end; $$;

create trigger tlimitesolp before insert on personaxes for each row execute procedure ft_limitesolp();

