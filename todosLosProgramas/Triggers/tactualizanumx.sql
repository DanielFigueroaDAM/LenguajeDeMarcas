drop trigger if exists t1_tactualizanumx on xogador; 
create or replace function ft_actualizanumx() returns trigger language plpgsql as $$
declare 

salariominactual integer;


begin


    UPDATE equipo
    SET numx = numx + 1
    WHERE codequ = new.codequ;

    RETURN NEW
return new;
end; $$;

create trigger t1_tactualizanumx before insert on xogador for each row execute procedure ft_actualizanumx();

