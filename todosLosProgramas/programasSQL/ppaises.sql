create or replace procedure ppaises() as $$
declare
	fila record;
	fila2 record;
	resultado varchar=E'\n';
	conta integer=0;
	vnaero varchar;
begin
	for fila in select * from paises loop
		resultado=resultado||fila.nomep||E'\n';
		for fila2 in select * from aeroportos where fila.codigop=codigop loop
			resultado=resultado||fila2.nomea||E'\n';
			conta=conta+1;
		end loop;
		resultado=resultado||'A candidade de aeroportos é '||conta||E'\n';
		if conta=0 then
			resultado=resultado||'pais sen aeroportos'||E'\n';
		end if;
		conta=0;
	end loop;


raise notice '%',resultado;
end;$$  language plpgsql 

