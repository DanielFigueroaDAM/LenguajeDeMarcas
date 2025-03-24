/*
Triger tmaxseriesp  que impida que un actor traballe en mais de 4 series distintas


insert into interpretesser values('a2', 'p1','s5',5);
aceptada insercion

insert into interpretesser values('a2', 'p7','s2',15);
NON

insert into interpretesser values('a2', 'p14','s5',25);
acptada insercion
*/
DROP TRIGGER IF EXISTS tmaxseriesp ON interpretesser;

CREATE OR REPLACE FUNCTION ft_maxseriesp() 
RETURNS TRIGGER 
LANGUAGE plpgsql 
AS $$
DECLARE
    i RECORD;
    j INTEGER := 0;
    arr VARCHAR[] := ARRAY[NULL, NULL, NULL, NULL]; 
    compr BOOLEAN := TRUE;
BEGIN
    FOR i IN (SELECT coda FROM interpretesser) LOOP
        -- Si el valor no está en el array, lo agregamos
        IF NOT (i.coda = ANY(arr)) THEN  
            arr[j+1] := i.coda;  -- Asignamos el valor al array
            j := j + 1;
            
            IF j = 3 THEN
                compr := FALSE;
            END IF;
        END IF;
    END LOOP;

    -- Si no se puede entrar, generamos una excepción
    IF NOT compr THEN
        RAISE EXCEPTION 'No puede entrar';
    ELSE
        RAISE NOTICE 'Si puede entrar';
    END IF;	

    RETURN NEW;
END; 
$$;

CREATE TRIGGER tmaxseriesp  
BEFORE INSERT ON interpretesser 
FOR EACH ROW 
EXECUTE FUNCTION ft_maxseriesp();


