/*
tlimiteactorp
impedir que un actor poda traballar  mais de  500 horas  na mesma serie (inserindo)

insert into interpretesser values('a18','p35','s3',1);
'o numero de horas traballadas por este actor nesta serie superaria  as 500 , rexeitada insercion'
insert into interpretesser values('a2','p35','s3',100);
'rexistro inserido'
*/

drop trigger if exists tlimiteactorp on interpretesser;
 create or replace function ft_tlimiteactorp() returns trigger language plpgsql as $$
declare
	suma integer;

begin
	select sum(horas) into suma from interpretesser where coda=new.coda and cods=new.cods;
	if(suma>500) then
	raise exception 'o numero de horas traballadas por este actor nesta serie superaria  as 500 , rexeitada insercion';
	else 
	raise notice 'rexistro inserido';
	end if;
return new;
end; $$;

create trigger tlimiteactorp before insert on interpretesser for each row execute procedure ft_tlimiteactorp();

