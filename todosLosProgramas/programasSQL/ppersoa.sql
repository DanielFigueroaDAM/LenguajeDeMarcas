create or replace procedure ppersoa(vcdni varchar) as $$
declare

	fila1 record;
	resultado varchar=E'\n';
	fila2 record;
	vnumperson integer;
	codigoxest varchar;
	nombrexest record;
begin
	select num_persoa into vnumperson from persoas where vcdni=dni;

	for fila1 in select * from entrevista where num_persoa=vnumperson loop 
		resultado=resultado||fila1.cod_posto;
		select cod_xestor into codigoxest from postos where cod_posto=fila1.cod_posto;
		select nom_xestor,ap1_xestor,ap2_xestor into nombrexest from xestores where codigoxest=cod_xestor;
		resultado=resultado||nombrexest||E'\n';
	end loop;
	

raise notice '%',resultado;
end;$$  language plpgsql 
