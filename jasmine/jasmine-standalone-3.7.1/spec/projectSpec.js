describe("calculateCost", () => {
    it("Calculates the cost of requested quantity of material", () => {
      let actual = calculateCost(20, 10);
      let expected = 200;
      expect(actual).toBe(expected);
    });
  });