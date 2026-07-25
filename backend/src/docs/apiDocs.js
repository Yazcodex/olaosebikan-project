/**
 * @swagger
 * tags:
 *   - name: Auth
 *   - name: Products
 *   - name: Orders
 *   - name: Dashboard
 *
 * /api/auth/login:
 *   post:
 *     tags: [Auth]
 *     summary: Admin login
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email, password]
 *             properties:
 *               email: { type: string, example: olaosebikan2212@gmail.com }
 *               password: { type: string, example: Sebikan2212## }
 *     responses:
 *       200: { description: Login successful }
 *
 * /api/products:
 *   get:
 *     tags: [Products]
 *     summary: List products with pagination and search
 *     parameters:
 *       - in: query
 *         name: page
 *         schema: { type: integer }
 *       - in: query
 *         name: limit
 *         schema: { type: integer }
 *       - in: query
 *         name: search
 *         schema: { type: string }
 *       - in: query
 *         name: category
 *         schema: { type: string }
 *     responses:
 *       200: { description: Product list }
 *   post:
 *     tags: [Products]
 *     security: [{ bearerAuth: [] }]
 *     summary: Create product
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name: { type: string }
 *               description: { type: string }
 *               price: { type: number }
 *               category: { type: string }
 *               image: { type: string, format: binary }
 *               imageUrl: { type: string }
 *               stockQuantity: { type: integer }
 *               isAvailable: { type: boolean }
 *     responses:
 *       201: { description: Product created }
 *
 * /api/products/{id}:
 *   put:
 *     tags: [Products]
 *     security: [{ bearerAuth: [] }]
 *     summary: Update product
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200: { description: Product updated }
 *   delete:
 *     tags: [Products]
 *     security: [{ bearerAuth: [] }]
 *     summary: Delete product
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200: { description: Product deleted }
 *
 * /api/orders:
 *   post:
 *     tags: [Orders]
 *     summary: Place anonymous customer order
 *     responses:
 *       201: { description: Order created }
 *   get:
 *     tags: [Orders]
 *     security: [{ bearerAuth: [] }]
 *     summary: List orders with pagination and search
 *     responses:
 *       200: { description: Order list }
 *
 * /api/orders/{id}:
 *   get:
 *     tags: [Orders]
 *     security: [{ bearerAuth: [] }]
 *     summary: Get order by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200: { description: Order details }
 *
 * /api/orders/{id}/status:
 *   put:
 *     tags: [Orders]
 *     security: [{ bearerAuth: [] }]
 *     summary: Update order status
 *     responses:
 *       200: { description: Status updated }
 *
 * /api/dashboard/stats:
 *   get:
 *     tags: [Dashboard]
 *     security: [{ bearerAuth: [] }]
 *     summary: Get dashboard analytics
 *     responses:
 *       200: { description: Dashboard stats }
 */
