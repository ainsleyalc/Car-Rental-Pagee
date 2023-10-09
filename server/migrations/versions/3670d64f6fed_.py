"""empty message

Revision ID: 3670d64f6fed
Revises: aefcc2576cd9
Create Date: 2023-10-07 15:00:05.524012

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '3670d64f6fed'
down_revision = 'aefcc2576cd9'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('vehicles', schema=None) as batch_op:
        batch_op.add_column(sa.Column('price', sa.Integer(), nullable=True))
        batch_op.drop_column('price_in_usd')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('vehicles', schema=None) as batch_op:
        batch_op.add_column(sa.Column('price_in_usd', sa.INTEGER(), nullable=False))
        batch_op.drop_column('price')

    # ### end Alembic commands ###
