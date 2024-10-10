import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });
    test('should return anderwID', () => {
        const query = "AndrewID";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "Your AndrewID is elainego."
          ));
    });
    test('should add numbers', () => {
        expect(QueryProcessor("What is 5 plus 52?")).toEqual("57");
        expect(QueryProcessor("What is 12 plus 1?")).toEqual("13");
    });
    test('should mult numbers', () => {
        expect(QueryProcessor("What is 5 multiplied by 5?")).toEqual("25");
        expect(QueryProcessor("What is 12 multiplied by 1?")).toEqual("12");
    });
    test('should minus numbers', () => {
        expect(QueryProcessor("What is 5 minus 5?")).toEqual("0");
        expect(QueryProcessor("What is 12 minus 1?")).toEqual("11");
    });
    test('should find max number', () => {
        expect(QueryProcessor("Which of the following numbers is the largest: 66, 35, 70?")).toEqual("70");
        expect(QueryProcessor("Which of the following numbers is the largest: 97, 12, 69?")).toEqual("97");
    });
});