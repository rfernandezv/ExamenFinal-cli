export class Student {
    studentId: number;
    name: string;
    lastName: string;
    typeGrade : string;
    amount: number;

    constructor() {}

    public setStudentId(value: number): Student {
        this.studentId = value;
        return this;
    }

    public setName(value: string): Student {
        this.name = value;
        return this;
    }

    public setLastName(value: string): Student {
        this.lastName = value;
        return this;
    }

    public setTypeGrade(value: string): Student {
        this.typeGrade = value;
        return this;
    }

    public setAmount(value: number): Student {
        this.amount = value;
        return this;
    }
}
