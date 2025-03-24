create or replace procedure pxogaxogadores() as $$
declare
resultado varchar =E'\n';
fila record;
filae record;
gols integer=0;
begin
for fila in select codx,nomx from xogador loop
	for filae in select codx,goles from xoga loop
		if filae.codx=fila.codx then
  			gols=gols+filae.goles;
		end if;
	end loop;
	resultado=resultado ||' El jugador '|| fila.nomx ||' tiene '|| gols ||' goles '|| E'\n';
	gols=0;
end loop;
raise notice '%', resultado;

end;$$  language plpgsql 
