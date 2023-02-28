export class UserValidator {
    public validatorNameField(name: string)
    {
        if (name.length > 3) {
            return name;
        }

        return 'The name property is invalid';
    }
}
