<ContainerView>
<ContentView>
    <FormView>
        <View>
            <CrearEventoTitle>Crear Evento</CrearEventoTitle>
        </View>
        <FormInput
        placeholder="Nombre del evento"
        value={nombre}
        onChangeText={(text) => SetNombre(text)}
        />
        <FormInput
        placeholder="Direccion del evento"
        value={direccion}
        onChangeText={(text) => SetDireccion(text)}
        />           
        <FormInput
        placeholder="Hora del evento"
        value={hora}
        onChangeText={(text) => SetHora(text)}
        />
        <FormInput
        placeholder="Fecha del evento"
        value={fecha}
        onChangeT  ext={(text) => SetFecha(text)}
        />
        <LoginRegisterButton onPress={crearEvento}>
            <LoginRegisterText>Crear</LoginRegisterText>
        </LoginRegisterButton>
    </FormView>
</ContentView>
</ContainerView>