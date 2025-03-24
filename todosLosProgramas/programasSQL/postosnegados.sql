create or replace procedure postosnegados(vcdni varchar) as $$
declare
	codeperson integer;
	codeempres varchar;
	fila record;
	resultado varchar=E'\n';
	fila1 record;
	count integer=0;
begin
	select num_persoa into codeperson from persoas where dni=vcdni;
	select cod_empresa into codeempres from rexeita where num_persoa=codeperson;
	for fila in select * from rexeita where num_persoa=codeperson loop
		if(fila.cod_empresa is not null) then
			for fila1 in select * from postos where fila.cod_empresa=cod_empresa loop
					resultado=resultado||fila1.cod_posto||E'\n';
					count=count+1;
			end loop;
		end if;
	end loop;

	if(count>0) then
		resultado=resultado|| 'Está persoa ten rexeitada '|| count || ' postos';
	else 
		resultado=resultado||'Esta persoa non ten rexeitado postos';
	end if;
		raise notice '%', resultado;
	

end;$$  language plpgsql 
