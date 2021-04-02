const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      apiUrl: "http://localhost:5000",
      usuarios: [],
      nombreCompleto: null,
      correo: null,
      contrasenia: null,
      confirmContrasenia: null,
      telefono: null,
      direccion: null,
      numero: null,
      comuna: null,
      tipoVivienda: null,
      numDepto: null,
      currentUser: null,
      isAuth: false,
      publicaciones: [],
      cliente_id: null,
      titulo: null,
      nombreAutor: null,
      editorial: null,
      nivel: null,
      asignatura: null,
      estadoNuevoUsado: null,
      condicionOriginalCopia: null,
      tipoIntercambio: null,
      precio: null,
      comentarios: null,
      error: null,
      datosPerfil: null,
      tokenLogin: null,
      publicacionesId: [],
    },
    actions: {
      getUsuarios: (url, options = {}) => {
        fetch(url, options)
          .then((resp) => resp.json())
          .then((data) => setStore({ usuarios: data }))
          .catch((error) => console.warn(error));
      },

      getPublicaciones: async () => {
        const store = getStore();
        const optionsPerfil = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        };
        const respPublicaciones = await fetch(
          store.apiUrl + "/api/crearlibro",
          optionsPerfil
        );
        const publicacionesAll = await respPublicaciones.json();
        setStore({
          publicaciones: publicacionesAll,
        });
      },

      handleChange: (e) => {
        const { name, value } = e.target;
        setStore({
          [name]: value,
        });
      },

      isAuthenticated: () => {
        console.log("verificando usuario");
        if (sessionStorage.getItem("isAuth")) {
          setStore({
            isAuth: JSON.parse(sessionStorage.getItem("isAuth")),
            currentUser: JSON.parse(sessionStorage.getItem("currentUser")),
            cliente_id: JSON.parse(sessionStorage.getItem("cliente_id")),
            datosPerfil: JSON.parse(sessionStorage.getItem("datosPerfil")),
          });
        }
      },

      handleRegistroUsuario: async (e, history) => {
        e.preventDefault();
        const store = getStore();
        const options = {
          method: "POST",
          body: JSON.stringify({
            nombreCompleto: store.nombreCompleto,
            correo: store.correo,
            contrasenia: store.contrasenia,
            telefono: store.telefono,
            direccion: store.direccion,
            numero: store.numero,
            comuna: store.comuna,
            tipoVivienda: store.tipoVivienda,
            numDepto: store.numDepto,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        };
        const resp = await fetch(store.apiUrl + "/api/crearusuario", options);
        const datos = await resp.json();
        setStore({
          currentUser: datos.usuario,
          cliente_id: datos.usuario.id,
          nombreCompleto: null,
          correo: null,
          contrasenia: null,
          confirmContrasenia: null,
          telefono: null,
          direccion: null,
          numero: null,
          comuna: null,
          tipoVivienda: null,
          numDepto: null,
          msg: datos.msg,
        });
        history.push("/login");
      },

      handleRegistroPublicacion: async (e, history) => {
        e.preventDefault();

        const store = getStore();
        const options = {
          method: "POST",
          body: JSON.stringify({
            cliente_id: store.cliente_id,
            titulo: store.titulo,
            nombreAutor: store.nombreAutor,
            editorial: store.editorial,
            nivel: store.nivel,
            asignatura: store.asignatura,
            estadoNuevoUsado: store.estadoNuevoUsado,
            condicionOriginalCopia: store.condicionOriginalCopia,
            tipoIntercambio: store.tipoIntercambio,
            precio: store.precio,
            comentarios: store.comentarios,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        };
        const resp = await fetch(store.apiUrl + "/api/crearlibro", options);
        const datos = await resp.json();
        console.log(datos);
        setStore({
          titulo: null,
          nombreAutor: null,
          editorial: null,
          nivel: null,
          asignatura: null,
          estadoNuevoUsado: null,
          condicionOriginalCopia: null,
          tipoIntercambio: null,
          precio: null,
          comentarios: null,
          msgPublicacion: datos.msg,
        });
        history.push("/");
      },

      handleLogin: async (e, history) => {
        e.preventDefault();

        const actions = getActions();
        const store = getStore();

        const options = {
          method: "POST",
          body: JSON.stringify({
            correo: store.correo,
            contrasenia: store.contrasenia,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        };
        const resp = await fetch(store.apiUrl + "/api/login", options);
        const datos = await resp.json();

        const optionsPerfil = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + datos.tokenLogin,
          },
        };
        const respPerfil = await fetch(
          store.apiUrl + "/api/perfil",
          optionsPerfil
        );
        const datosPerfil = await respPerfil.json();
        console.log(datos);
        setStore({
          currentUser: datos,
          contrasenia: null,
          datosPerfil: datosPerfil,
          cliente_id: datosPerfil.id,
          isAuth: true,
        });
        sessionStorage.setItem("currentUser", JSON.stringify(datos));
        sessionStorage.setItem("isAuth", true);
        sessionStorage.setItem("cliente_id", datosPerfil.id);
        sessionStorage.setItem("datosPerfil", JSON.stringify(datosPerfil));
        getActions().getPublicacionesUsuario();
        history.push("/");
      },

      getPublicacionesUsuario: async () => {
        const store = getStore();
        const optionsPerfil = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        };
        const respPublicacionesId = await fetch(
          store.apiUrl + "/api/usuario/" + store.cliente_id + "/libro",
          optionsPerfil
        );
        const datosPerfil = await respPublicacionesId.json();
        console.log(datosPerfil);
        setStore({
          publicacionesId: datosPerfil,
        });
      },
      cerrarSesion: (history) => {
        sessionStorage.removeItem("currentUser");
        sessionStorage.removeItem("isAuth");
        sessionStorage.removeItem("cliente_id");
        sessionStorage.removeItem("datosPerfil");
        setStore({
          currentUser: null,
          isAuth: false,
          cliente_id: null,
          datosPerfil: null,
          correo: null,
          publicacionesId: null,
        });
        history.push("/");
      },
    },
  };
};

export default getState;
