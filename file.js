VAR
    setOne : ARRAY_OF INTEGER[4];
    setTwo : ARRAY_OF INTEGER[4];
    i,j,sum : INTEGER := 0;
    dublicated : BOOLEAN;
BEGIN

    setOne := [12, 13, 6, 10];
    setTwo := [13, 10, 16,15];

    
    FOR i FROM 0 TO setOne.length DO 
        dublicated := false;
        FOR j FROM 0 TO setTwo.length-1 DO
            IF setOne[i] = setTwo[j] THEN 
                dublicated := true;
            END_IF
        END_FOR
        IF dublicated THEN 
            sum := sum + setOne[i]*2;
        END_IF

    END_FOR

    Write("Sum of all overlapping  elements : ", sum);

END