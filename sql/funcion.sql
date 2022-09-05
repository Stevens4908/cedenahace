
CREATE OR REPLACE FUNCTION public.__usuarios_registrar_usuarios(
	__p_username_usuario character varying,
	__p_email_usuario character varying,
	__p_password_usuario character varying,
	__p_role_usuario integer[])
    RETURNS jsonb
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE PARALLEL UNSAFE
AS $BODY$
DECLARE
    __v_respuesta               JSONB;
    __v_msj_excep               TEXT;
	__v_id_usuario				INTEGER;
	__v_data_usuario			JSONB;
	__v_rol						INTEGER;
	
BEGIN
	INSERT 
		INTO 
		usuario (username_usuario,
				 password_usuario,
				 email_usuario,
				 created_on,
				 estado_usuario	
				)
		VALUES (__p_username_usuario,
                __p_password_usuario,
                __p_email_usuario,
				NOW(),
				1
				)
		RETURNING id_usuario INTO __v_id_usuario;
	
	foreach __v_rol in array __p_role_usuario loop
		INSERT 
			INTO
				usuario_x_rol (id_usuario    , id_rol , created_on)
			VALUES			  (__v_id_usuario, __v_rol, NOW() );
	end loop;
	
	SELECT
	JSONB_BUILD_OBJECT(
		'id',u.id_usuario,
		'usuario',u.username_usuario,
		'email',u.email_usuario,
		'roles', (SELECT JSONB_AGG(JSONB_BUILD_OBJECT(
							'id',r.id_rol,
							'rol',r.descripcion_rol
						))
				  	FROM usuario_x_rol uxr,
				  		 rol r
				  	WHERE uxr.id_rol    = r.id_rol
				    AND  uxr.id_usuario = __v_id_usuario
				)
	)
	INTO __v_data_usuario
	FROM usuario u 
	WHERE  u.id_usuario = __v_id_usuario;

	__v_respuesta = JSONB_BUILD_OBJECT('status',0,'msj','Se Registro correctamente','data',__v_data_usuario);

	RETURN __v_respuesta;

	EXCEPTION 
		
		WHEN OTHERS THEN

			GET STACKED DIAGNOSTICS __v_msj_excep = PG_EXCEPTION_CONTEXT;
			__v_respuesta = JSONB_BUILD_OBJECT('status',1,'msj','Hubo un error','stack_error',CONCAT(SQLERRM,' - ',__v_msj_excep));
			RETURN __v_respuesta;
    ------------------------------------------------------
END;
$BODY$;





CREATE OR REPLACE FUNCTION public.__area_eliminar_areas(
	__p_id_area INTEGER)
    RETURNS jsonb
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE PARALLEL UNSAFE
AS $BODY$
DECLARE
    __v_respuesta               JSONB;
    __v_msj_excep               TEXT;
	
BEGIN
	DELETE FROM oficina WHERE id_area = __p_id_area;
    DELETE FROM area WHERE id_area = __p_id_area;

	__v_respuesta = JSONB_BUILD_OBJECT('status',0,'msj','Se elimino correctamente area','data',__v_data_usuario);

	RETURN __v_respuesta;

	EXCEPTION 
		
		WHEN OTHERS THEN

			GET STACKED DIAGNOSTICS __v_msj_excep = PG_EXCEPTION_CONTEXT;
			__v_respuesta = JSONB_BUILD_OBJECT('status',1,'msj','Hubo un error','stack_error',CONCAT(SQLERRM,' - ',__v_msj_excep));
			RETURN __v_respuesta;
    ------------------------------------------------------
END;
$BODY$;



CREATE OR REPLACE FUNCTION public.__area_obtener_areas_oficinas()
    RETURNS jsonb
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE PARALLEL UNSAFE
AS $BODY$
DECLARE
    fila 		RECORD;
   __v_json 	JSONB;
   __v_resp 	JSONB;
   __v_respuesta   JSONB;
   __v_msj_excep   TEXT;
	
BEGIN

	 for fila in  select *
			 		from area a
	   loop 
	  
	   	__v_json := JSONB_AGG(
						JSONB_BUILD_OBJECT(
								'id' , 		fila.id_area,
								'nombre', 	fila.nombre_area,
								'oficinas', (SELECT JSONB_AGG(JSONB_BUILD_OBJECT(
												'id_oficina'		,o.id_oficina,
												'nombre_oficina'	,o.nombre_oficina,
												'latitud_oficina'	,o.latitud_oficina,
												'longitud_oficina'	,o.longitud_oficina,
												'imagen'	        ,o.imagen_oficina,
												'descripcion_oficina', o.descripcion_oficina
												 ))
												FROM oficina o WHERE o.id_area= fila.id_area
											 	AND o.estado_oficina = 1
											)
				));
				
			__v_resp:=    (SELECT COALESCE (__v_resp ||__v_json , __v_json));
						
	   end loop;


	__v_respuesta = JSONB_BUILD_OBJECT('status',0,'msj','oficinas cargadas correctamente','data',__v_resp);

	RETURN __v_respuesta;

	EXCEPTION 
		
		WHEN OTHERS THEN

			GET STACKED DIAGNOSTICS __v_msj_excep = PG_EXCEPTION_CONTEXT;
			__v_respuesta = JSONB_BUILD_OBJECT('status',1,'msj','Hubo un error','stack_error',CONCAT(SQLERRM,' - ',__v_msj_excep));
			RETURN __v_respuesta;
    ------------------------------------------------------
END;
$BODY$;
