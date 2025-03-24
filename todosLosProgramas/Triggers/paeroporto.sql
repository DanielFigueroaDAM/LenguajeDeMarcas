/*
pasandolle  codigo dun aeroporto devolte o codigo data e horas dos voos que fan escala nel.
Se no aeropoto non hai voos que fagan escala debe imprimirse a mensaxe 'aeropoto sen voos
con escalas'
se o aeropoto non existe debe imprimirse a mensaxe 'aeropoto inexistente'
call paeroporto('a7');
call paeroporto('a1'); sen voos con escalas
call paeroporto('a13'); aeroporto inexistete
*/

create or replace procedure paeroporto(codaer varchar) as $$
declare

	fila1 record;
	resultado varchar=E'\n';
	fila2 record;
	codao2 varchar;
begin
	select *  into codao2 from aeroportos where codaer=codigoa;
	if(codao2 is not null) then
			for fila1 in select * from escalas where codigoa=codaer loop
			
				resultado=resultado||fila1.codigov||E'\n';
			end loop;
			if (select count (*) from escalas where codigoa=codaer) = 0 then
				resultado=resultado||'no hay escalas';
			end if;	
			
	else
		resultado=resultado||'aeroporto inexistente';
	end if;

	

raise notice '%',resultado;
end;$$  language plpgsql 
