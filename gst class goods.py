class Goods:
    def __init__(self, name, price):
        self.name = name
        self.price = price

    def calculate_gst(self, rate):
        gst_amount = (self.price * rate) / 100
        return gst_amount

if __name__ == "__main__":
    name = input("Enter the name of the product: ")
    price = float(input("Enter the price of the product: "))
    rate = float(input("Enter the GST rate in percentage: "))

    product = Goods(name, price)
    gst_amount = product.calculate_gst(rate)

    print(f"Product: {product.name}")
    print(f"Price: ${product.price:.2f}")
    print(f"GST Rate: {rate}%")
    print(f"GST Amount: ${gst_amount:.2f}")



