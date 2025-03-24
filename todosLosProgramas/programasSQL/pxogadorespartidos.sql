create or replace procedure pxogadorespartidos() as $$
declare
resultado varchar =E'\n';
fila record;
begin
for fila in select codpar,nompar,data from partido loop
resultado=resultado ||' '|| fila.codpar ||' '|| fila.nompar ||' '|| fila.data || E'\n';
end loop;
raise notice '%', resultado;

end;$$  language plpgsql 
