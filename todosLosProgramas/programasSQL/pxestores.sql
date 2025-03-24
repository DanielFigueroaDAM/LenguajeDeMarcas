create or replace procedure pxestores() as $$
declare

	fila1 record;
	resultado varchar=E'\n';
	fila2 record;
	codigoxest varchar;
	count integer=0;

begin
	for fila1 in select * from xestores loop
		resultado=resultado||'xestor: '||fila1.cod_xestor||E'\n';
		for fila2 in select * from postos where cod_xestor=fila1.cod_xestor loop
			resultado=resultado||'     '||fila2.cod_posto||'---'||fila2.des_posto||E'\n';
			count=count+1;
		end loop;
		if count=0 then
			resultado=resultado||'este xestor non xestionou ningun posto'||E'\n'||E'\n';
		else
			resultado=resultado||'total: '||count||E'\n'||E'\n';
		end if;
		count=0;
	end loop;


raise notice '%',resultado;
end;$$  language plpgsql 
