drop trigger if exists tperfil on entrevista; 
create or replace function ft_perfil() returns trigger language plpgsql as $$
declare 
	perfilPersoa varchar;
	perfilPosto varchar;

begin

	select cod_perfil into perfilPersoa from persoas where num_persoa=new.num_persoa;
	select cod_perfil into perfilPosto from postos where cod_posto=new.cod_posto;
	if(perfilPersoa=perfilPosto) then 
		raise notice'Si vai';
	else
		raise exception'Non vai';
	end if;

return new;
end; $$;

create trigger tperfil before insert on entrevista for each row execute procedure ft_perfil();

